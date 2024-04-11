/** @format */

import db from "@/db";
import Button from "./components/Button";
import Container from "./components/Container";
import { redirect } from "next/navigation";
import createNote from "./actions/createNote";
import NewNoteForm from "./components/NewNoteForm";
import NoteCard from "./components/NoteCard";

export default async function Home() {
  const notes = await db.note.findMany();

  return (
    <>
      <Container>
        <NewNoteForm />
      </Container>
      <Container>
        <div className="mt-5">
          <h1 className="text-3xl font-bold mb-3">
            Hey Luke, here are your notes:
          </h1>
          <div className="grid grid-cols-2 gap-4">
            {notes.map((note) => {
              return <NoteCard key={note.id} note={note} />;
            })}
          </div>
        </div>
      </Container>
    </>
  );
}
