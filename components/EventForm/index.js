import Link from "next/link";

export default function EventForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  function addEvent() {
    return "";
  }

  return (
    <>
      <h2> Add your Own Event</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />
        <br></br>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" required />
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" required />
        <br></br>
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" required />
        <br></br>
        <label htmlFor="description">Description:</label>
        <br></br>
        <textarea
          id="description"
          name="description"
          rows="8"
          required
        ></textarea>
        <br></br>
        <br></br>
        <Link href="/MyEvents">
          <button type="button" onClick={addEvent}>
            Add Your Own Event
          </button>
        </Link>
      </form>
    </>
  );
}
