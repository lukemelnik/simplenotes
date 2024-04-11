/** @format */
"use server";

import { redirect } from "next/navigation";

export default async function editNote(id: number) {
  redirect(`/${id}/edit`);
}
