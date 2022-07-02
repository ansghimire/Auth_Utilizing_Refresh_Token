import { useGetNotesQuery } from "../features/note/noteApiSlice"


const NoteList = () => {
  const {
    data: notes,
    isLoading,
    isSuccess,
    isError,
    error
} = useGetNotesQuery()


  let content;
  if (isLoading) {
    content = <p>"Loading..."</p>;
  } else if (isSuccess) {
    content = (
      <section className="users">
        <h1>Note List</h1>
        <ul>
          {notes.map((note, i) => {
            return <li key={i}>{note.title}: {note.subject}</li>
          })}
        </ul>

      </section>
    )
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  }

  return content


}

export default NoteList