import Link from "next/link";

async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/Note/records?page=1&perPage=30',
        { cache: 'no-store' }
    );
    const data = await res.json();
    return data?.items as any[];
}

export default async function NotesPage() {
    const notes = await getNotes();
    return (
        <div>
            <h1>N O T E S</h1>
            <div>
                {notes?.map((note) => {
                    return <Note key={note.id} note={note} />
                })}
            </div>
        </div>
    );
}

function Note({ note }: any) {
    const { id, Title, Content, created } = note || {};

    return (
        <Link href={'/Note/${id}'}>
            <div>
                <h2>{Title}</h2>
                <h5>{Content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    );
}