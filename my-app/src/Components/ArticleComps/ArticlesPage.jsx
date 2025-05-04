import React from 'react';
import './ArticlesPage.css';

const articles = [
    {
        id: 1,
        title: 'איך ללמוד תכנות בצורה יעילה',
        description: 'במאמר זה נדון בשיטות הטובות ביותר ללמידת תכנות בצורה עצמאית ומהנה.',
        image: '/article1.jpg'
    },
    {
        id: 2,
        title: 'המדריך המלא ל-React',
        description: 'מדריך מקיף למתחילים בריאקט: איך להתחיל ולבנות אפליקציה ראשונה.',
        image: '/article2.jpg'
    },
    {
        id: 3,
        title: 'טיפים לעבודה נכונה מהבית',
        description: 'איך לשמור על פרודוקטיביות וניהול זמן כשעובדים מרחוק.',
        image: '/article3.jpg'
    }
];

export default function ArticlesPage() {
    return (
        <div className="articles-page">
            <h1>מאמרים</h1>
            <div className="articles-grid">
                {articles.map(article => (
                    <div key={article.id} className="article-card">
                        <img src={article.image} alt={article.title} />
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <a href="#">לקריאת המאמר המלא</a>
                    </div>
                ))}
            </div>
        </div>
    );
}
