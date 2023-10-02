import {z} from "zod";
import validator from "validator";

export const babySchema = z.object({
  gender: z.boolean().describe('Sexe'),
  name: z.string().min(1).max(50).describe('Prénom'),
  dateOfBirth: z.coerce.date().min(new Date(2023, 8, 27)).max(new Date(2023, 8, 30)).describe('Date de naissance (terme au 25 octobre)'),
  weight: z.coerce.number().min(2000).max(10000).describe('Poids (en grammes)'),
  height: z.coerce.number().min(30).max(100).describe('Taille (en cm)'),
})

export const userSchema = z.object({
  name: z.string().min(1).max(50).describe('Prénom'),
  phoneNumber: z.string({required_error: "Pour ne pas participer plusieurs fois.... On te connait!"}).min(10).max(10).refine(validator.isMobilePhone).describe('Numéro de téléphone'),
})
