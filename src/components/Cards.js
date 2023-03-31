import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>A bit about us</h1>
            <div className='card'>
                <div className='wrapper'>
                    <ul className='items'>
                        <CardItem
                            src='images/think.gif'
                            text='We will show your top job opportunities after completing a short quiz'
                            label='Find your top matches'
                            path='/services'
                        />
                        <CardItem
                            src='images/idea.gif'
                            text='We only show roles relevant to you'
                            label='No endless scrolling'
                            path='/services'
                        />
                    </ul>
                    <ul className='items'>
                        <CardItem
                            src='images/jobs.gif'
                            text='We make sure there are no outdated or duplicate jobs on our platform.'
                            label='No more ghosting'
                            path='/services'
                        />
                        <CardItem
                            src='images/job.gif'
                            text='All the info about the company in one page'
                            label='Useful Insights'
                            path='/for-employers'
                        />
                        <CardItem
                            src='images/work.gif'
                            text='In the office, hybrid or remote. It is totally up to you'
                            label='Work where you want'
                            path='/login'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
