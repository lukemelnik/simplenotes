/** @format */

import db from "@/db";
import Button from "./components/Button";
import Container from "./components/Container";
import { redirect } from "next/navigation";
import createNote from "./actions/createNote";
import NewNoteForm from "./components/NewNoteForm";

const testNote = {
  title: "Test Note",
  content: "This is a test note for you",
};

export default async function Home() {
  const notes = await db.note.findMany();

  async function deleteNote({ id }: { id: string }) {
    await db.note.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
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
              return (
                <div
                  key={note.id}
                  className="bg-gray-300 text-gray-800 rounded-xl p-8 relative"
                >
                  <button className="text-xl font-bold absolute right-5 top-5">
                    X
                  </button>
                  <h3 className="font-bold text-lg">{note.title}</h3>
                  <p>{note.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}
