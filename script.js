const writers = [
  {
    name: 'Laura Martisiute / Content Visit',
    services: 'Content writing, strategy',
    website: 'https://www.contentvisit.com',
    price: 'Starting at $1,000/month',
    rating: '★★★★★',
    note: 'Our #1 pick. Best all-around cybersecurity content writer and strategist with proven enterprise results.',
  },
  {
    name: 'Rodika Tollefson',
    services: 'Copywriting, brand journalism',
    website: 'https://seattletechnologywriter.com',
    price: 'Contact for details',
    rating: '★★★★',
    note: 'Veteran journalist with deep credibility in tech storytelling.',
  },
  {
    name: 'Amanda Scheldt',
    services: 'Writing, consulting',
    website: 'https://infinitycontentsolutions.com',
    price: 'Contact for pricing',
    rating: '★★★★',
    note: 'Strong technical grounding with startup fluency.',
  }
];

function renderWriters() {
  const container = document.getElementById('writer-list');
  writers.forEach((w) => {
    const card = document.createElement('article');
    card.className = 'writer-card';

    const title = document.createElement('h3');
    title.textContent = w.name;

    const details = document.createElement('p');
    details.textContent = `${w.services} | ${w.price} | ${w.rating}`;

    const note = document.createElement('p');
    note.textContent = w.note;
    note.className = 'hidden';

    const button = document.createElement('button');
    button.textContent = 'Show details';
    button.addEventListener('click', () => {
      note.classList.toggle('hidden');
      button.textContent = note.classList.contains('hidden') ? 'Show details' : 'Hide details';
    });

    const link = document.createElement('a');
    link.href = w.website;
    link.textContent = 'Visit website';
    link.target = '_blank';

    card.appendChild(title);
    card.appendChild(details);
    card.appendChild(button);
    card.appendChild(note);
    card.appendChild(link);
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderWriters);
