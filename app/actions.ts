"use server";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export type FormState = {
  success: boolean;
  error?: string;
};

export async function submitApplication(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const full_name = formData.get("name")?.toString().trim();
  const email     = formData.get("email")?.toString().trim().toLowerCase();
  const phone     = formData.get("phone")?.toString().trim();

  // Basic validation
  if (!full_name || !email || !phone) {
    return { success: false, error: "All fields are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const { error } = await supabase
    .from("distributor_applications")
    .insert({ full_name, email, phone });

  if (error) {
    // Duplicate email
    if (error.code === "23505") {
      return { success: false, error: "This email has already been submitted." };
    }
    console.error("Supabase error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }

  return { success: true };
}
