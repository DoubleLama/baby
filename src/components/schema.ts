import {z} from "zod";
import validator from "validator";

export const babySchema = z.object({
  gender: z.boolean().describe('Sexe'),
  name: z.string().min(1).max(50).describe('Prénom'),
  dateOfBirth: z.coerce.date().min(new Date(2023, 8, 27)).max(new Date(2023, 9, 29)).describe('Date de naissance'),
  weight: z.coerce.number().min(2000).max(10000).describe('Poids'),
  height: z.coerce.number().min(35).max(100).describe('Taille'),
})


export const userSchema = z.object({
  name: z.string().min(1).max(50).describe('Prénom'),
  phoneNumber: z.string({required_error: "Pour pas participer plusieurs fois.... On te connait!"}).min(10).max(10).refine(validator.isMobilePhone).describe('Numéro de téléphone'),
})