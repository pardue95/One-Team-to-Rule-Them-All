const { Book } = require('../models'); 

const bookData = [
    {
        book_id: '1',
        author: 'Harper Lee',
        title: 'To Kill a Mockingbird',
        genre: 'Gothic Fiction'
    },
    {
        book_id: '2',
        author: 'George Orwell',
        title: '1984',
        genre: 'Science Fiction'
    },
    {
        book_id: '3',
        author: 'J.R.R. Tolkien',
        title: 'The Lord of the Rings',
        genre: 'High Fantasy'
    },
    {
        book_id: '4',
        author: 'J.D. Salinger',
        title: 'The Catcher in the Rye',
        genre: 'Young Adult Fiction'
    },
    {
        book_id: '5',
        author: 'F. Scott Fitzgerald',
        title: 'The Great Gatsby',
        genre: 'Historical Fiction'
    },
    {
        book_id: '6',
        author: 'C.S. Lewis',
        title: 'The Lion, the Witch and the Wardrobe (Chronicles of Narnia, #1)',
        genre: 'Fantasy Fiction'
    },
    {
        book_id: '7',
        author: 'William Golding',
        title: 'Lord of the Flies',
        genre: 'Young Adult Fiction'
    },
    {
        book_id: '8',
        author: 'George Orwell',
        title: 'Animal Farm',
        genre: 'Allegory'
    },
    {
        book_id: '9',
        author: 'Joseph Heller',
        title: 'Catch-22',
        genre: 'Absurdist Fiction'
    },
    {
        book_idd: '10',
        author: 'John Steinbeck',
        title: 'The Grapes of Wrath',
        genre: 'Historical Fiction'
    },
    {
        book_iddd: '11',
        author: 'Margaret Mitchell',
        title: 'Gone with the Wind',
        genre: 'Romance'
    },
    {
        book_id: '12',
        author: 'Kurt Vonnegut Jr.',
        title: 'Slaughterhouse-Five',
        genre: 'Science Fiction'
    },
    {
        book_id: '13',
        author: 'Valdimir Nabokov',
        title: 'Lolita',
        genre: 'Fiction'
    },
    {
        book_id: '14',
        author: 'Ken Kesey',
        title: "One Flew Over the Cuckoo's Nest", 
        genre: 'Psycological Fiction'
    },
    {
        book_id: '15',
        author: 'Anthony Burgess',
        title: 'A Clockwork Orange',
        genre: 'Science Fiction'
    },
    {
        book_id: '16',
        author: 'Judy Blume',
        title: "Are You There God? It's Me, Margaret",
        genre: 'Young Adult Fiction'
    },
    {
        book_id: '17',
        author: 'Ian McEwan',
        title: 'Atonement',
        genre: 'Psycological Fiction'
    },
    {
        book_id: '18',
        author: 'Alan Moore',
        title: 'Watchmen',
        genre: 'Science Fiction'
    },
    {
        book_id: '19',
        author: 'Kazuo Ishiguro',
        title: 'Never Let Me Go',
        genre: 'Science Fiction'
    },
    {
        book_id: '20',
        author: 'Chinua Achebe',
        title: 'Things Fall Apart (The African Trilogy, #1)',
        genre: 'Historical Fiction'
    },
    {
        book_id: '21',
        author: 'Ralph Ellison',
        title: 'Invisible Man',
        genre: 'Fiction'
    },
    {
        book_id: '22',
        author: 'Virginia Woolf',
        title: 'Mrs. Dalloway',
        genre: 'Psycological Fiction'
    },
    {
        book_id: '23',
        author: 'Toni Morrison',
        title: 'Beloved',
        genre: 'Magical Realism'
    },
    {
        book_id: '24',
        author: 'Jack Kerouac',
        title: 'On the Road',
        genre: 'Autobigraphical Novel'
    },
    {
        book_id: '25',
        author: 'Ernest Hemingway',
        title: 'The Sun Also Rises',
        genre: 'Historical Fiction'
    },
    {
        book_id: '26',
        author: 'A.S. Byatt',
        title: 'Possession',
        genre: 'Romance Novel'
    },
    {
        book_id: '27',
        author: 'Raymond Chandler',
        title: 'The Big Sleep',
        genre: 'Detective Novel'
    },
    {
        book_id: '28',
        author: 'E.M. Forster',
        title: 'A Passage to India',
        genre: 'Fiction'
    },
    {
        book_id: '29',
        author: 'Robert Graves',
        title: 'I, Claudius (Cladius, #1)',
        genre: 'Hisorical Fiction'
    },
    {
        book_id: '30',
        author: 'Zora Neale Hurston',
        title: 'Their Eyes Were Watching God',
        genre: 'Psycological Fiction'
    },
    {
        book_id: '31',
        author: 'William Faulkner',
        title: 'The Sound and the Fury',
        genre: 'Gothic Fiction'
    },
    {
        book_id: '32',
        author: 'Robert Penn Warren',
        title: "All the King's Men",
        genre: 'Political Fiction'
    },
    {
        book_id: '33',
        author: 'Margaret Atwood',
        title: 'The Blind Assassin',
        genre: 'Historical Fiction'
    },
    {
        book_id: '34',
        author: 'Richard Wright',
        title: 'Native Son',
        genre: 'Psycological Fiction'
    },
    {
        book_id: '35',
        author: 'Virginia Woolf',
        title: 'To the Lighthouse',
        genre: 'Fiction'
    },
    {
        book_id: '36',
        author: 'E.L. Doctorow',
        title: 'Ragtime',
        genre: 'Historical Fiction'
    },
    {
        book_id: '37',
        author: 'John Fowles',
        title: "The French Lieutenant's Woman",
        genre: 'Romance'
    },
    {
        book_id: '38',
        author: 'William Faulkner',
        title: 'Light in August',
        genre: 'Southern Gothic'
    },
    {
        book_id: '39',
        author: 'John le Carré',
        title: 'The Spy Who Came In from the Cold',
        genre: 'Spy Fiction'
    },
    {
        book_id: '40',
        author: 'Carson McCullers',
        title: 'The Heart Is a Lonely Hunter',
        genre: 'Southern Gothic'
    },
    {
        book_id: '41',
        author: 'Cormac McCarthy',
        title: 'Blood Meridian, or the Evening Redness in the West',
        genre: 'Western'
    },
    {
        book_id: '42',
        author: 'Don DeLillo',
        title: 'White Noise',
        genre: 'Fiction'
    },
    {
        book_id: '43',
        author: 'William S. Burroughs',
        title: 'Naked Lunch',
        genre: 'Science Fiction'
    },
    {
        book_id: '44',
        author: 'David Foster Wallace',
        title: 'Infinite Jest',
        genre: 'Postmodern'
    },
    {
        book_id: '45',
        author: 'Evelyn Waugh',
        title: 'Brideshead Revisited',
        genre: 'Fiction'
    },
    {
        book_id: '46',
        author: 'Neal Stephenson',
        title: 'Snow Crash',
        genre: 'Cyberpunk'
    },
    {
        book_id: '47',
        author: 'Richard Yates',
        title: 'Revolutionary Road',
        genre: 'Tragedy'
    },
    {
        book_id: '48',
        author: 'Salman Rushdie',
        title: "Midnight's Children",
        genre: 'Magical Realism'
    },
    {
        book_id: '49',
        author: 'Muriel Spark',
        title: 'The Prime of Miss Jean Brodie',
        genre: 'Psycological Fiction'
    },
    {
        book_id: '50',
        author: 'Willa Cather',
        title: 'Death Comes for the Archbishop',
        genre: 'Historical Fiction'
    }
];

const seedBook = () => Book.bulkCreate(bookData);

module.exports = seedBook;