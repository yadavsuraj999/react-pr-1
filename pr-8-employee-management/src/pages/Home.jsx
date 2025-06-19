import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="pt-16">
            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive HR Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Everything you need to manage your workforce efficiently and effectively
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Repeatable Feature Card */}
                        {[
                            {
                                title: 'Employee Management',
                                iconColor: 'blue',
                                description:
                                    'Comprehensive employee profiles, onboarding processes, and performance tracking to manage your workforce effectively.',
                                svgPath:
                                    'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z',
                            },
                            {
                                title: 'Time & Attendance',
                                iconColor: 'green',
                                description:
                                    'Advanced time tracking, leave management, and attendance monitoring with real-time reporting and analytics.',
                                svgPath:
                                    'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
                            },
                            {
                                title: 'Payroll & Benefits',
                                iconColor: 'purple',
                                description:
                                    'Automated payroll processing, benefits administration, and compensation management with compliance assurance.',
                                svgPath:
                                    'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
                            },
                            {
                                title: 'Performance Management',
                                iconColor: 'red',
                                description:
                                    'Goal setting, performance reviews, feedback systems, and development planning to maximize employee potential.',
                                svgPath:
                                    'M13 10V3L4 14h7v7l9-11h-7z',
                            },
                            {
                                title: 'Learning & Development',
                                iconColor: 'indigo',
                                description:
                                    'Training programs, skill development tracking, and certification management to enhance employee capabilities.',
                                svgPath:
                                    'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
                            },
                            {
                                title: 'Compliance & Security',
                                iconColor: 'yellow',
                                description:
                                    'Ensure regulatory compliance, data security, and privacy protection with built-in compliance management tools.',
                                svgPath:
                                    'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="glass-card p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-slide-up">
                                <div className={`w-16 h-16 bg-gradient-to-br from-${item.iconColor}-500 to-${item.iconColor}-600 rounded-xl flex items-center justify-center mb-6`}>
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.svgPath}></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
