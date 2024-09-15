import React from 'react';

export default function Card({ projects }) {
    return (
        <div className='flex justify-between space-x-10'>
            {projects.map(({ img, title, description, url, languages }, index) => {
                return (
                    <div key={index} className='relative flex flex-col mt-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96'>
                        <div className="relative h-48 m-2.5 overflow-hidden text-white rounded-md">

                            <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full" src={img.src} alt={img.alt} />
                        </div>
                        <div className="p-4">
                            <div className='flex flex-row'>
                                {languages.map((language) => {
                                    return (
                                        <div className="mb-4 basis-2 mx-2 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                                            {language}
                                        </div>
                                    )
                                })}
                            </div>
                            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                {title}
                            </h6>
                            <p className="text-slate-600 leading-normal font-light">
                                {description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between p-4">
                            <div>
                                <a href={url} className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
