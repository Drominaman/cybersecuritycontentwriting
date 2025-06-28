// src/app/components/WriterCard.js
export default function WriterCard({ writer }) {
  const {
    name = '',
    services = '',
    website = '',
    price = '',
    rating = '',
    note = '',
    featured = false,
  } = writer;

  const isLaura = name.toLowerCase().includes('laura martisiute');

  const displayWebsite = website.replace(/^https?:\/\//, '');

  return (
    <a
      href={website || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className={
        isLaura
          ? 'writer-card border-yellow-500 bg-yellow-50 shadow-lg hover:shadow-xl ring-2 ring-yellow-400 p-8'
          : featured
            ? 'writer-card border-blue-600 bg-blue-50 shadow-lg hover:shadow-xl ring-1 ring-blue-300 p-8'
            : 'writer-card border-gray-300 bg-white shadow-md hover:shadow-lg ring-1 ring-transparent hover:ring-blue-400 p-8'
      }
    >
      <strong className="writer-name text-xl mb-5 block">{name}</strong>
      <div className="mb-2" />
      <p className="writer-details">
        <strong>Services:</strong> {services}
      </p>
      <p className="writer-details">
        <strong>Website:</strong>{' '}
        <span className="text-blue-600 underline">{displayWebsite}</span>
      </p>
      <p className="writer-details">
        <strong>Pricing:</strong> {price}
      </p>
      <p className="writer-details mt-4">{rating}</p>
      <p className="writer-details mt-1">{note}</p>
    </a>
  );
}