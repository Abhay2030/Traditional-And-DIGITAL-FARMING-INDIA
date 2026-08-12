export interface ComparisonItem {
  category: string;
  traditional: string;
  modern: string;
  icon: string;
  traditionalImage: string;
  modernImage: string;
}

export const comparisonData: ComparisonItem[] = [
  { category: 'Observation', traditional: 'Human observation', modern: 'Human + sensors + imagery', icon: '👁️', traditionalImage: 'trad_observation.png', modernImage: 'mod_observation.png' },
  { category: 'Water', traditional: 'Manual irrigation decisions', modern: 'Information-supported irrigation', icon: '💧', traditionalImage: 'trad_water.png', modernImage: 'mod_water.png' },
  { category: 'Field Monitoring', traditional: 'Walking through the field', modern: 'Field visits + drone/satellite/sensor data', icon: '🌾', traditionalImage: 'trad_observation.png', modernImage: 'mod_observation.png' },
  { category: 'Weather', traditional: 'Experience and local observation', modern: 'Weather data + forecasts + local observation', icon: '🌤️', traditionalImage: 'trad_observation.png', modernImage: 'mod_observation.png' },
  { category: 'Records', traditional: 'Paper / memory', modern: 'Digital records', icon: '📋', traditionalImage: 'trad_machinery.png', modernImage: 'mod_machinery.png' },
  { category: 'Machinery', traditional: 'Manual operations', modern: 'Guidance, mapping & connected machinery', icon: '🚜', traditionalImage: 'trad_machinery.png', modernImage: 'mod_machinery.png' },
  { category: 'Decision Making', traditional: 'Experience', modern: 'Experience + data + analytics', icon: '🧠', traditionalImage: 'trad_water.png', modernImage: 'mod_water.png' },
];

export interface ProblemSolution {
  id: string;
  problem: string;

  tool: string;
  whyItHelps: string;
  humanAction: string;
}

export const problemSolutions: ProblemSolution[] = [
  {
    id: 'moisture', problem: "I don't know how moisture varies across my field.",

    tool: 'Soil sensors / field measurements',
    whyItHelps: 'Provides additional information about field conditions.',
    humanAction: 'Farmer interprets information and decides what to do.'
  },
  {
    id: 'water', problem: 'I may be using more water than my crops need.',

    tool: 'Smart irrigation with soil moisture sensors',
    whyItHelps: 'Information helps time and measure water application.',
    humanAction: 'Farmer adjusts irrigation schedule based on data and experience.'
  },
  {
    id: 'weather', problem: 'Weather surprises can damage my crops.',

    tool: 'Weather station + forecast services',
    whyItHelps: 'Earlier awareness of changing conditions.',
    humanAction: 'Farmer plans activities around weather information.'
  },
  {
    id: 'crop-health', problem: 'I cannot check every plant in a large field.',

    tool: 'Drone imagery + field scouting',
    whyItHelps: 'Identifies areas that need closer inspection.',
    humanAction: 'Farmer inspects flagged areas and decides on action.'
  },
  {
    id: 'records', problem: 'I forget what I did last season.',

    tool: 'Digital record-keeping app',
    whyItHelps: 'Creates a searchable history of farm activities.',
    humanAction: 'Farmer reviews records when planning next season.'
  },
  {
    id: 'navigation', problem: 'My tractor rows are not perfectly straight.',

    tool: 'GPS guidance system',
    whyItHelps: 'Provides accurate steering assistance.',
    humanAction: 'Farmer monitors equipment while GPS assists navigation.'
  },
];

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1, question: 'What does a soil moisture sensor measure?',
    options: ['Air temperature', 'Water content in soil', 'Wind speed', 'Sunlight intensity'],
    correctIndex: 1, explanation: 'Soil moisture sensors measure the amount of water present in the soil, helping farmers make irrigation decisions.'
  },
  {
    id: 2, question: 'What does IoT stand for?',
    options: ['Internet of Tractors', 'Internet of Things', 'Information on Temperature', 'Irrigation of Tomorrow'],
    correctIndex: 1, explanation: 'IoT stands for Internet of Things — connected devices that collect and exchange information.'
  },
  {
    id: 3, question: 'How can drones help farmers?',
    options: ['They replace farmers', 'They provide aerial images of fields', 'They water crops automatically', 'They harvest crops'],
    correctIndex: 1, explanation: 'Drones capture images from above, helping farmers see their entire field and identify areas that need attention.'
  },
  {
    id: 4, question: 'What is precision farming?',
    options: ['Farming precisely at 6 AM', 'Treating different parts of a field based on their specific conditions', 'Using only one type of crop', 'Farming on small land only'],
    correctIndex: 1, explanation: 'Precision farming means managing different areas of a field differently, based on their actual conditions and needs.'
  },
  {
    id: 5, question: 'What does GPS help with in farming?',
    options: ['Cooking food', 'Knowing exact location in the field', 'Predicting crop prices', 'Controlling pests'],
    correctIndex: 1, explanation: 'GPS provides accurate location information, helping machines navigate fields precisely and create accurate maps.'
  },
  {
    id: 6, question: 'In smart farming, who makes the final decisions?',
    options: ['The computer', 'The drone', 'The farmer', 'The sensor'],
    correctIndex: 2, explanation: 'Technology provides information and support, but the farmer — with their experience and local knowledge — makes the final decisions.'
  },
  {
    id: 7, question: 'What is NDVI used for?',
    options: ['Measuring rain', 'Indicating vegetation health from imagery', 'Controlling tractors', 'Predicting earthquakes'],
    correctIndex: 1, explanation: 'NDVI (Normalized Difference Vegetation Index) uses imagery to indicate how healthy and green vegetation is.'
  },
  {
    id: 8, question: 'Which Indian system provides satellite navigation similar to GPS?',
    options: ['ISRO-SAT', 'NavIC', 'BharatNav', 'IndiaGPS'],
    correctIndex: 1, explanation: 'NavIC (Navigation with Indian Constellation) is India\'s regional satellite navigation system providing coverage over India.'
  },
];

export interface CropStage {
  stage: string;

  description: string;
  technology: string;
  techDescription: string;
  icon: string;
  color: string;
}

export const cropJourney: CropStage[] = [
  { stage: 'Seed', description: 'The journey begins with selecting the right seed for the soil and climate.', technology: 'Digital Records', techDescription: 'Track seed varieties, sources, and performance history.', icon: '🌱', color: '#8BC34A' },
  { stage: 'Germination', description: 'Seeds sprout and push through the soil, beginning new life.', technology: 'Soil Sensors', techDescription: 'Monitor soil moisture and temperature for optimal germination conditions.', icon: '🌿', color: '#69B84F' },
  { stage: 'Growth', description: 'Plants grow taller, developing leaves and strengthening roots.', technology: 'IoT Monitoring', techDescription: 'Continuous tracking of growth conditions — moisture, nutrients, weather.', icon: '🌾', color: '#4CAF50' },
  { stage: 'Flowering', description: 'Plants bloom, a critical stage that determines future yield.', technology: 'Drone Imagery', techDescription: 'Aerial observation helps monitor crop health across the field.', icon: '🌸', color: '#E91E63' },
  { stage: 'Maturity', description: 'Crops reach full maturity, ready for harvest.', technology: 'Weather + AI', techDescription: 'Weather data and analytics support optimal harvest timing.', icon: '🌻', color: '#FF9800' },
  { stage: 'Harvest', description: 'The reward of the season — crops are harvested and collected.', technology: 'Smart Machinery', techDescription: 'GPS-guided machinery with yield monitoring for efficient harvesting.', icon: '🌾', color: '#F57F17' },
];
