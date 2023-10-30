import React from 'react';
import Sidebar from '../find_a_co_founder/Sidebar';
import { motion } from 'framer-motion';
import { AiFillPlayCircle } from 'react-icons/ai';

const Curriculum = () => {
  const curriculumData = [
    {
      title: 'Module 1: Introduction to Entrepreneurship',
      lessons: [
        {
          title: 'Lesson 1: What is Entrepreneurship?',
          resources: [
            'Video: Introduction to Entrepreneurship',
            'Article: Characteristics of Successful Entrepreneurs',
          ],
        },
        {
          title: 'Lesson 2: Importance of Innovation',
          resources: ['Video: The Role of Innovation in Startups'],
        },
        {
          title: 'Lesson 3: Identifying Business Opportunities',
          resources: ['Article: Spotting Opportunities in the Market', 'Worksheet: Opportunity Assessment'],
        },
        {
          title: 'Lesson 4: The Entrepreneurial Mindset',
          resources: ['Article: Cultivating an Entrepreneurial Mindset', 'Book: Recommended Reading'],
        },
      ],
    },
    {
      title: 'Module 2: Business Planning and Strategy',
      lessons: [
        {
          title: 'Lesson 1: Business Model Canvas',
          resources: [
            'Video: Understanding Business Model Canvas',
            'Template: Download Business Model Canvas Template',
          ],
        },
        {
          title: 'Lesson 2: Crafting Your Business Idea',
          resources: ['Article: Developing Your Business Idea', 'Worksheet: Idea Refinement'],
        },
        {
          title: 'Lesson 3: Setting Business Goals',
          resources: ['Article: SMART Goal Setting', 'Worksheet: Goal Setting Template'],
        },
        {
          title: 'Lesson 4: Strategic Planning',
          resources: ['Video: Strategic Planning for Startups', 'Template: Strategic Planning Framework'],
        },
      ],
    },
    {
      title: 'Module 3: Market Research and Customer Analysis',
      lessons: [
        {
          title: 'Lesson 1: Conducting Market Research',
          resources: ['Article: Market Research Techniques', 'Worksheet: Market Research Survey Template'],
        },
        {
          title: 'Lesson 2: Understanding Your Target Audience',
          resources: ['Video: Customer Persona Creation', 'Article: Identifying Customer Needs'],
        },
        {
          title: 'Lesson 3: Competitive Analysis',
          resources: ['Article: Analyzing Your Competitors', 'Template: Competitive Analysis Framework'],
        },
        {
          title: 'Lesson 4: User Surveys and Feedback',
          resources: ['Article: Collecting User Feedback', 'Worksheet: User Survey Questions'],
        },
      ],
    },
    {
      title: 'Module 4: Product Development and Innovation',
      lessons: [
        {
          title: 'Lesson 1: Product Development Process',
          resources: ['Video: From Idea to Product', 'Article: Prototyping and MVP'],
        },
        {
          title: 'Lesson 2: Developing a Minimum Viable Product (MVP)',
          resources: ['Article: MVP Best Practices', 'Worksheet: MVP Planning Template'],
        },
        {
          title: 'Lesson 3: Innovation and Creativity',
          resources: ['Article: Fostering Innovation in Your Startup', 'Book: Recommended Reading'],
        },
        {
          title: 'Lesson 4: Building a Prototype',
          resources: ['Video: Prototyping Techniques', 'Template: Prototype Development Kit'],
        },
      ],
    },
  ];
  
  return (
    <div className="flex">
      <Sidebar />
      <div className="py-20  px-8 space-y-6">
        <h1 className="text-3xl font-bold">Startup School Curriculum</h1>

        {curriculumData.map((module, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold">{module.title}</h2>
            <div className="space-y-4">
              {module.lessons.map((lesson, lessonIndex) => (
                <motion.div
                  key={lessonIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: lessonIndex * 0.2 }}
                >
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex-shrink-0">
                      <AiFillPlayCircle className="text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold">{lesson.title}</h3>
                  </div>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    {lesson.resources.map((resource, resourceIndex) => (
                      <li key={resourceIndex}>{resource}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
