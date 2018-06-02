using System;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Expressions;
using System.Collections.Generic;

using AutoMapper;
using Template_Program.Models;
using Template_Program.ViewModels;

namespace Template_Program.Helpers
{
    public class MappingProfile : Profile
    {
        public Func<DateTime, string> AgeFunc = bDate => 
        ((DateTime.Today - bDate.Date).TotalDays / 365).ToString("00");

        public MappingProfile()
        {
            #region Breed_Map
            CreateMap<Breed, BreedViewModel>()
                .ForMember(x => x.Pets, o => o.Ignore());
            #endregion

            #region Customer
            CreateMap<Customer, CustomerViewModel>()
                .ForMember(x => x.Age,o => o.MapFrom(s => s.BirthDate != null ? AgeFunc(s.BirthDate.Value) : "-"))
                .ForMember(x => x.Pets, o => o.Ignore());
            #endregion

            #region Diagnoses
            CreateMap<Diagnoses, DiagnosesViewModel>()
                .ForMember(x => x.PetHaveDiagnosis, o => o.Ignore());
            #endregion

            #region Medicines
            CreateMap<Medicines, MedicinesViewModel>();
            #endregion

            #region Pet
            CreateMap<Pet, PetViewModel>()
                .ForMember(x => x.Age, o => o.MapFrom(s => s.BrithDate != null ? AgeFunc(s.BrithDate.Value) : "-"))
                .ForMember(x => x.BreedName, o => o.MapFrom(s => s.Breed != null ? s.Breed.Name : ""))
                .ForMember(x => x.Breed, o => o.Ignore())
                .ForMember(x => x.Customer, o => o.Ignore());
            #endregion

            #region PetHaveDiagonsis
            CreateMap<PetHaveDiagnosis, PetHaveDiagnosisViewModel>()
                .ForMember(x => x.Diagnose, o => o.Ignore());
            #endregion

            #region Treatments
            CreateMap<Treatments, TreatmentsViewModel>()
                .ForMember(x => x.Diagnoses, o => o.Ignore())
                .ForMember(x => x.Medicines, o => o.Ignore());
            #endregion
        }
    }
}
