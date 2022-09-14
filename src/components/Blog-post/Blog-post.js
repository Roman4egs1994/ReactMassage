import React from "react";
import './styles-blog-post/blog-post.css';




export const BlogPost = () => {
    return (
        <div className='message'>  
            <div className='сlock'>
                <span className='month'>Август</span>
                <span className='number'>16</span>
                <span className='year'>2021</span>
                <span className='dot'>.</span>
                <span className='time'>6 минут</span>
            </div>

            <div className='blog_text'>
                <p className='text_discr'>Как наладить отношения с клиентами веб-дизайна</p>
            </div>

            <div className='article'>
                <p className='article_open'>Читать статью &#8594;</p>
            </div>
        </div>
    );
};