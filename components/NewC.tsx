'use client'

import React, { Component } from 'react';

var pimages = [
    {
        "name": "test1",
        "src": "./eve1.png"
    },
    {
        "name": "test1",
        "src": "./eve1.png"
    },    
    {
        "name": "test1",
        "src": "./eve3.png"
    },
    {
        "name": "test1",
        "src": "./eve2.png"
    },
    {
        "name": "test1",
        "src": "./eve3.png"
    },
    {
        "name": "test1",
        "src": "./eve3.png"
    },
    {
        "name": "test1",
        "src": "./eve3.png"
    },
    {
        "name": "test1",
        "src": "./eve3.png"
    },
    {
        "name": "test1",
        "src": "./eve3.png"
    }
];

export default class NewC extends Component {
    render() {
        return (
            <div className='grid grid-rows-3 grid-flow-col'>
                {pimages.map(x => (
                    <div className='bg-blue-400 py-10 px-10'>
                        <div>
                            <img className="h-22" src={x.src} alt={x.name} />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
