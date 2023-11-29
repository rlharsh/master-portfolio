// src/contexts/DataContext.js
import React, { createContext, useState, useContext } from 'react';

export const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({}); // Initialize your data state here
    const [currentMenuData, setCurrentMenuData] = useState(null); // Define the state for currentMenuData

    // You can add functions to modify `data` here if needed
    const aboutDataProfessional = [
        {
            title: "professional-info",
            color: "green",
            children: [{
                title: ".info",
                color: "blue",
                children: [{
                    title: "_summary.md",
                    path: "summary"
                }, {
                    title: "_skills.md",
                    path: "skills"
                }, {
                    title: "_experience.md",
                    path: "experience"
                }, {
                    title: "_philosophy.md",
                    path: "philosophy"
                }, {
                    title: "_goals.md",
                    path: "goals"
                }, {
                    title: "_interests.md",
                    path: "interests"
                }, {
                    title: "_achievements.md",
                    path: "achievements"
                }]
            }]
        }
    ];

    const aboutDataPersonal = [
        {
            title: "personal-info",
            color: "purple",
            children: [{
                title: ".info",
                color: "orange",
                children: [{
                    title: "_hobbies.md",
                    path: "hobbies"
                }, {
                    title: "_personal_goals.md",
                    path: "personal_goals"
                }, {
                    title: "_education.md",
                    path: "education"
                }, {
                    title: "_volunteering.md",
                    path: "volunteering"
                }, {
                    title: "_projects.md",
                    path: "personal_projects"
                }, {
                    title: "_travel.md",
                    path: "travel"
                }, {
                    title: "_wellness.md",
                    path: "wellness"
                }]
            }]
        }
    ];

    const aboutDataHobbies = [
        {
            title: "hobbies-info",
            color: "green",
            children: [{
                title: "_gaming.md",
                path: "gaming"
            }, {
                title: "_nature.md",
                path: "nature"
            }, {
                title: "_music.md",
                path: "music"
            }]
        }
    ];

    const updateMenuData = (path) => {
        if (path.startsWith('/about/professional')) {
            setCurrentMenuData(aboutDataProfessional);
        } else if (path.startsWith('/about/personal')) {
            setCurrentMenuData(aboutDataPersonal);
        } else if (path.startsWith('/about/hobbies')) {
            setCurrentMenuData(aboutDataHobbies);
        } else {
            setCurrentMenuData(null);
        }
    };

    return (
        <DataContext.Provider value={{ data, setData, updateMenuData, setCurrentMenuData, currentMenuData }}>
            {children}
        </DataContext.Provider>
    );
};
