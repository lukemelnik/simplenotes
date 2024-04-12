/** @format */

import Container from "@/app/components/Container";
import NewNoteForm from "@/app/components/NewNoteForm";
import db from "@/db";
import React from "react";

export default async function EditPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const note = await db.note.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return (
    <div>
      <Container>
        <NewNoteForm note={note} />
      </Container>
    </div>
  );
}
