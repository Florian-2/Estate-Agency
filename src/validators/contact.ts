import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { HEAR_ABOUT_US, INQUIRY_TYPE } from "@/data/contact-form";

export const contactFormSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().transform((value, ctx) => {
        const phone = parsePhoneNumberFromString(value, {
            defaultCountry: "US",
            extract: false,
        });

        if (phone && phone.isValid()) {
            return phone.number;
        }

        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Invalid phone number",
        });

        return z.NEVER;
    }),
    inquiryType: z.enum(INQUIRY_TYPE),
    hearAboutUs: z.enum(HEAR_ABOUT_US),
    message: z.string().min(20).max(1_000),
    terms: z.literal(true),
});

export type ContactFormType = z.infer<typeof contactFormSchema>;
