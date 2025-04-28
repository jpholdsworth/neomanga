import uniqid from "uniqid";

const BlogData = [
    {
        id: uniqid(),
        image: 'https://thevaultpublication.com/wp-content/uploads/2024/01/fp4.png', 
        category: 'themes',
        title: 'Fire Punch: A Dark Mirror of Hope and Despair',
        date: '20 Sept 2024',
        blurb: 'Explore the raw, brutal world of Fire Punch, where themes of revenge, faith, and survival challenge the very nature of hope.'
    },
    {
        id: uniqid(),
        image: 'https://jojo-news.com/wp-content/uploads/2025/04/Steel-Ball-Run-Anime-Revealed-1024x576.png', 
        category: 'anime',
        title: "New Anime Release: JoJo's Bizarre Adventure - Steel Ball Run",
        date: '12 Apr 2025', 
        blurb: "The long-awaited Steel Ball Run anime adaptation is here, bringing Johnny Joestar's epic race across America to vivid life."
    },
    {
        id: uniqid(),
        image: 'https://staticg.sportskeeda.com/editor/2024/02/f69b4-17080231115377-1920.jpg?w=640', 
        category: 'event',
        title: 'What to Expect at Jump Festa 2025',
        date: '5 Jan 2025',
        blurb: 'Jump Festa 2025 is packed with new anime announcements, exclusive manga previews, and special panels featuring your favorite Shonen Jump creators.'
    },
    {
        id: uniqid(),
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdUWNl7W1RNAGeAkmOPSLnTUS5XM1ZY1GvSw&s',
        category: 'guide',
        title: "A Beginner's Guide to Manga Genres",
        date: '28 Dec 2024',
        blurb: 'New to manga? This simple guide breaks down the major genres—from shonen adventures to chilling psychological horror.'
    }
];

export default BlogData;