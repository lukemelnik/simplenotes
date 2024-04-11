/** @format */

"use server";

import db from "@/db";

export default async function getNotes() {
  const notes = await db.note.findMany();
  return notes;
}
