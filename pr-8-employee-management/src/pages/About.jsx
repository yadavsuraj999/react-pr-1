import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-50 min-h-screen">

            <div className="pt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
                        About EmpowerHR
                    </h1>

                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        EmpowerHR is a leading employee management platform designed to transform how organizations manage their most valuable asset - their people...
                    </p>

                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                            <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To empower organizations with innovative HR technology...
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                            <h3 className="text-2xl font-bold text-purple-600 mb-4">Our Vision</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To be the global leader in employee management solutions...
                            </p>
                        </div>
                    </div>

                    {/* Why Choose */}
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose EmpowerHR?</h2>
                    <ul className="space-y-6">
                        {[
                            {
                                title: "Comprehensive Solution",
                                desc: "All-in-one platform covering every aspect of HR management."
                            },
                            {
                                title: "User-Centric Design",
                                desc: "Intuitive interfaces designed for both HR professionals and employees."
                            },
                            {
                                title: "Advanced Analytics",
                                desc: "Powerful reporting and analytics tools to make data-driven decisions."
                            },
                            {
                                title: "Enterprise Security",
                                desc: "Bank-level security, global compliance, and data protection."
                            }
                        ].map((item, i) => (
                            <li key={i} className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                                    <p className="text-gray-700">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Commitment */}
                    <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
                        <p className="text-gray-700 leading-relaxed">
                            We are committed to continuous innovation, exceptional customer service...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
