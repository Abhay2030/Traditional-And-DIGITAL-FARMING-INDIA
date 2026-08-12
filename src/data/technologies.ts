import {
  Plane, Satellite, Wifi, Droplets, Target, MapPin,
  Brain, BarChart3, Tractor, Bot, CloudSun, Sun,
  FileText, Laptop
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Technology {
  id: string;
  number: string;
  title: string;
  icon: LucideIcon;
  color: string;
  tagline: string;
  simpleExplanation: string;
  farmerFriendly: string;
  howItWorks: string;
  farmExample: string;
  advantages: string[];
  limitations: string[];
  deepDive: string;
}

export const technologies: Technology[] = [
  {
    id: 'drones', number: '01', title: 'Drones', icon: Plane, color: '#7C4DFF',
    tagline: 'Eyes in the sky.',
    simpleExplanation: 'A flying device that captures information from above your field.',
    farmerFriendly: 'Giving the farmer eyes in the sky — seeing the whole field without walking every row.',
    howItWorks: 'Drones fly over fields with cameras and sensors, capturing images that show crop health and growth patterns. Software processes these into detailed field maps.',
    farmExample: 'A cotton farmer uses a drone to scan 50 acres in 30 minutes. Images reveal a section with different growth patterns, prompting closer inspection.',
    advantages: ['Cover large areas quickly', 'Identify areas needing attention', 'Create detailed field maps', 'Monitor crop growth over time'],
    limitations: ['Initial equipment cost', 'Weather dependent', 'Requires training', 'Battery limits flight time'],
    deepDive: 'Agricultural drones use multispectral cameras capturing light beyond human vision. NDVI (Normalized Difference Vegetation Index) indicates plant health by measuring how plants reflect different wavelengths.'
  },
  {
    id: 'satellites', number: '02', title: 'Satellites & Remote Sensing', icon: Satellite, color: '#1A237E',
    tagline: 'Looking at large areas from above.',
    simpleExplanation: 'Satellites orbiting Earth observe large agricultural areas and provide information about land and vegetation.',
    farmerFriendly: 'Seeing your entire district from space — that is what satellites can do for farming.',
    howItWorks: 'Satellites orbit Earth capturing images at regular intervals showing vegetation patterns, land use, and environmental conditions across large areas.',
    farmExample: 'Agricultural authorities use satellite imagery to monitor crop conditions across a region during the growing season.',
    advantages: ['Cover very large areas', 'Regular repeat observations', 'Historical data available', 'Free data sources (ISRO, Sentinel)'],
    limitations: ['Resolution may miss plant details', 'Cloud cover blocks images', 'Processing requires expertise', 'Interpretation needs knowledge'],
    deepDive: 'ISRO operates Resourcesat and Cartosat series. Sentinel-2 provides free 10m resolution imagery every 5 days. Mahalanobis National Crop Forecast Centre uses this for national crop estimates.'
  },
  {
    id: 'iot-sensors', number: '03', title: 'IoT & Sensors', icon: Wifi, color: '#00BCD4',
    tagline: 'Digital senses for the field.',
    simpleExplanation: 'Small connected devices in the field that measure conditions like moisture, temperature, and humidity.',
    farmerFriendly: 'Like giving your farm digital senses — feeling soil, air, and water, sending info to your phone.',
    howItWorks: 'Sensors placed at different field points measure conditions and send data wirelessly to a smartphone app for viewing and tracking over time.',
    farmExample: 'A grape farmer places 5 soil moisture sensors across the vineyard. The app shows the eastern section has lower moisture, guiding irrigation focus.',
    advantages: ['Continuous monitoring', 'Data-driven decisions', 'Early change detection', 'Saves manual check time'],
    limitations: ['Initial investment', 'Needs power (battery/solar)', 'Connectivity required', 'Maintenance needed'],
    deepDive: 'Agricultural IoT uses LPWAN like LoRaWAN for connectivity. Common sensors include capacitive soil moisture probes, RTD temperature sensors, and electrochemical nutrient sensors.'
  },
  {
    id: 'smart-irrigation', number: '04', title: 'Smart Irrigation', icon: Droplets, color: '#2196F3',
    tagline: 'Every drop matters.',
    simpleExplanation: 'Using sensor and weather data to make better decisions about when and how much to water.',
    farmerFriendly: 'Instead of guessing when to water, information helps give the right amount at the right time.',
    howItWorks: 'Soil moisture sensors measure water levels. Weather forecasts predict rain. A control system uses this to adjust irrigation — watering only when needed.',
    farmExample: 'A sugarcane farmer\'s system detects adequate moisture and rain forecast for tomorrow. It suggests delaying irrigation, saving water.',
    advantages: ['Reduces water waste', 'Improves efficiency', 'Can be automated', 'Responds to actual conditions'],
    limitations: ['Installation cost', 'Reliable water supply needed', 'System maintenance', 'Power supply required'],
    deepDive: 'Smart irrigation combines evapotranspiration (ET) models with real-time soil moisture. ET models calculate water loss based on temperature, humidity, wind, and solar radiation.'
  },
  {
    id: 'precision-farming', number: '05', title: 'Precision Farming', icon: Target, color: '#4CAF50',
    tagline: 'Right input. Right place. Right time.',
    simpleExplanation: 'Managing different field parts differently based on their specific conditions.',
    farmerFriendly: 'Not every corner of your field is the same. Precision farming treats each part according to its needs.',
    howItWorks: 'Combining sensor, drone, and satellite data creates maps showing how conditions vary. This guides variable-rate application of inputs.',
    farmExample: 'A wheat farmer\'s field map shows varying soil fertility. Fertilizer is applied at different rates in different zones.',
    advantages: ['Optimizes input usage', 'Reduces waste and cost', 'Improves environmental impact', 'Site-specific decisions'],
    limitations: ['Requires multiple data sources', 'Specialized equipment', 'Training required', 'Better at larger scales'],
    deepDive: 'Precision agriculture relies on spatial variability — soil properties and crop growth differ within a field. Variable-rate technology (VRT) adjusts application rates based on prescription maps.'
  },
  {
    id: 'gps-gnss', number: '06', title: 'GPS / GNSS', icon: MapPin, color: '#FF5722',
    tagline: 'Know exactly where you are.',
    simpleExplanation: 'Satellite navigation telling machines and farmers their exact field location.',
    farmerFriendly: 'GPS helps machines know exactly where they are, so they can work more accurately.',
    howItWorks: 'GPS receivers on equipment receive satellite signals to determine precise position, enabling guidance systems for straight rows and accurate mapping.',
    farmExample: 'GPS guidance on a tractor maintains consistent row spacing and reduces overlap, saving seed and time.',
    advantages: ['Accurate navigation', 'Reduces overlaps/gaps', 'Enables field mapping', 'Works day and night'],
    limitations: ['Accuracy varies', 'Equipment cost', 'Needs clear sky', 'Tree cover affects reception'],
    deepDive: 'GNSS includes GPS, GLONASS, Galileo, and India\'s NavIC. Standard GPS: ~2-5m accuracy. RTK correction: ~2cm. NavIC provides regional coverage with comparable accuracy.'
  },
  {
    id: 'ai-ml', number: '07', title: 'AI & Machine Learning', icon: Brain, color: '#9C27B0',
    tagline: 'Computer-assisted pattern finding.',
    simpleExplanation: 'Computer systems that learn to recognize patterns in large amounts of data.',
    farmerFriendly: 'A helper that looks at lots of information and points out things worth checking.',
    howItWorks: 'AI systems trained on large datasets can analyze new data to identify patterns, anomalies, or make predictions about crops and conditions.',
    farmExample: 'A farmer photographs a leaf with unusual spots. An AI app suggests a possible disease, recommending expert consultation.',
    advantages: ['Process large data quickly', 'Pattern recognition', 'Prediction capability', 'Image analysis'],
    limitations: ['Requires quality training data', 'Can make errors', 'May miss local conditions', 'Results need expert verification'],
    deepDive: 'Agricultural AI includes CNNs for image classification, RNNs for time-series forecasting, and reinforcement learning for optimization. Models train on datasets like PlantVillage (50,000+ images).'
  },
  {
    id: 'data-analytics', number: '08', title: 'Data Analytics', icon: BarChart3, color: '#00897B',
    tagline: 'Numbers that tell a story.',
    simpleExplanation: 'Collecting farm data over time and analyzing it to find patterns for better decisions.',
    farmerFriendly: 'Keeping track of everything on the farm and using that information to plan better.',
    howItWorks: 'Data from sensors, weather, machinery, and records is collected, stored digitally, and analyzed to reveal trends and insights.',
    farmExample: 'Reviewing 3 years of records, a farmer notices a variety consistently performs better in one section, informing next season\'s planting.',
    advantages: ['Evidence-based decisions', 'Historical comparison', 'Trend identification', 'Better planning'],
    limitations: ['Requires consistent collection', 'Data quality matters', 'Analysis skills needed', 'Starting habit takes effort'],
    deepDive: 'Farm analytics use time-series databases for sensor data, geospatial databases for maps, and ML models for analysis. Key: yield mapping, input-output analysis, benchmarking.'
  },
  {
    id: 'smart-machinery', number: '09', title: 'Smart Machinery', icon: Tractor, color: '#E65100',
    tagline: 'Machines that work smarter.',
    simpleExplanation: 'Farm machinery with GPS, sensors, and computers for more precise work.',
    farmerFriendly: 'Tractors that use technology to do their job more accurately — following perfect lines automatically.',
    howItWorks: 'Modern machinery equipped with GPS guidance, auto-steering, variable-rate controllers, and monitoring sensors for precise operations.',
    farmExample: 'GPS-guided tractor maintains perfect row spacing. Auto-steer lets the operator focus on monitoring the planter.',
    advantages: ['Improved accuracy', 'Reduced fatigue', 'Better efficiency', 'Data collection during work'],
    limitations: ['High cost for advanced features', 'Technical knowledge needed', 'Electronic maintenance', 'Brand compatibility issues'],
    deepDive: 'ISOBUS (ISO 11783) enables plug-and-play communication between tractors and implements. Modern combines feature yield monitors creating real-time yield maps.'
  },
  {
    id: 'robotics', number: '10', title: 'Robotics', icon: Bot, color: '#455A64',
    tagline: 'Automated helping hands.',
    simpleExplanation: 'Robots designed for specific farming tasks like weeding, planting, or monitoring.',
    farmerFriendly: 'Small machines that do repetitive field tasks so the farmer can focus on decisions.',
    howItWorks: 'Agricultural robots use cameras, sensors, and AI to navigate fields and perform tasks like weeding between crop rows.',
    farmExample: 'A weeding robot moves between rows, using cameras to identify weeds and removing them mechanically.',
    advantages: ['Reduces repetitive labor', 'Can work longer hours', 'Precise operations', 'May reduce chemical use'],
    limitations: ['Emerging technology', 'High cost', 'Best for specific tasks', 'Requires organized fields'],
    deepDive: 'Key areas: autonomous navigation (RTK-GPS + computer vision), manipulation (robotic arms for harvesting), and swarm robotics (multiple small robots).'
  },
  {
    id: 'weather-tech', number: '11', title: 'Weather Technology', icon: CloudSun, color: '#0277BD',
    tagline: 'Reading the sky with data.',
    simpleExplanation: 'Weather stations providing detailed, location-specific weather information for farming.',
    farmerFriendly: 'Accurate weather info for your exact location — not just the nearest city.',
    howItWorks: 'On-farm stations measure temperature, humidity, rainfall, wind, and solar radiation. Combined with forecasts for planning.',
    farmExample: 'Checking station data shows wind will increase in the afternoon. Spraying is scheduled for calm morning hours.',
    advantages: ['Location-specific data', 'Better planning', 'Reduced weather risks', 'Historical records'],
    limitations: ['Station cost', 'Forecasts not guaranteed', 'Maintenance required', 'Data interpretation needed'],
    deepDive: 'Agricultural stations measure parameters for crop models and pest forecasting. IMD provides district-level agromet advisories. Degree-day models predict insect development.'
  },
  {
    id: 'solar-energy', number: '12', title: 'Solar & Renewable Energy', icon: Sun, color: '#F57F17',
    tagline: 'Farming with the sun.',
    simpleExplanation: 'Using solar panels to power farm operations, pumps, and technology.',
    farmerFriendly: 'Using sunlight to run your water pump and reduce electricity costs.',
    howItWorks: 'Solar panels convert sunlight to electricity, powering irrigation pumps, sensors, cold storage, and buildings. PM-KUSUM supports adoption.',
    farmExample: 'A farmer installs a solar pump under PM-KUSUM. The pump runs during sunny hours; excess power feeds the grid.',
    advantages: ['Reduced energy costs', 'Clean energy', 'Government subsidies', 'Low maintenance'],
    limitations: ['Upfront cost', 'Weather dependent', 'Space needed', 'Battery storage adds cost'],
    deepDive: 'PM-KUSUM aims for 25,750 MW solar capacity in agriculture by 2026. Component B supports standalone solar pumps up to 7.5 HP. Agriculture consumes ~18% of India\'s electricity.'
  },
  {
    id: 'digital-records', number: '13', title: 'Digital Records', icon: FileText, color: '#546E7A',
    tagline: 'From memory to data.',
    simpleExplanation: 'Keeping farm records digitally instead of on paper or in memory.',
    farmerFriendly: 'Writing everything about your farm in a phone — so you never forget and can always look back.',
    howItWorks: 'Mobile apps let farmers record activities, expenses, sales, and observations, creating searchable digital farm history.',
    farmExample: 'An app records every expense and sale. At season end, it shows clear profit/loss and identifies most profitable crops.',
    advantages: ['Nothing forgotten', 'Easy to search/compare', 'Supports planning', 'Builds farm history'],
    limitations: ['Needs consistent habit', 'Requires smartphone', 'Data entry takes time', 'Privacy considerations'],
    deepDive: 'FMIS range from simple expense apps to comprehensive platforms integrating maps, sensors, machinery, and accounting. AgriStack creates unified digital infrastructure.'
  },
  {
    id: 'farm-management', number: '14', title: 'Farm Management Systems', icon: Laptop, color: '#2F7D32',
    tagline: 'The whole farm. One view.',
    simpleExplanation: 'Software bringing together all farm information into one dashboard.',
    farmerFriendly: 'One screen showing everything about your farm — like a control center.',
    howItWorks: 'Platforms integrate data from sensors, weather, machinery, finances, and observations through dashboards, maps, and reports.',
    farmExample: 'A farm manager sees sensor readings, weather forecast, irrigation status, and tasks all in one place.',
    advantages: ['Centralized information', 'Better decisions', 'Time savings', 'Comprehensive view'],
    limitations: ['Subscription costs', 'Learning curve', 'Depends on data quality', 'Internet needed'],
    deepDive: 'Modern FMIS use API integrations (MQTT/HTTP for IoT, ISOBUS for machinery). Cloud-based for any-device access. Features: field mapping, task management, inventory, financial reporting.'
  }
];

