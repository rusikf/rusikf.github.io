export default function Contacts() {
  const email = 'ruslan.coroliov+3@outlook.com';
  return (
    <div className="my-4">
      <p>
        <a href={`mailto:${email}`}>Email</a>
      </p>

      <a href="https://www.linkedin.com/in/ruslan-coroliov/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  )
}
