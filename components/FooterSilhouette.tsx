import React from 'react';

const FooterSilhouette: React.FC = () => (
  <div className="w-full">
    <svg viewBox="0 0 1440 120" className="w-full h-auto block" preserveAspectRatio="xMidYMax meet">
      <g fill="#4b5563"> {/* gray-600 for a professional look */}
        {/* The main silhouette path, combining all figures and elements into one shape */}
        <path d="
          M -5,120 V 110
          
          /* --- Scene 1: Donation --- */
          /* Person giving */
          C 50,110 50,50 60,50 C 70,50 75,60 75,65 V 110 H 50 V 70 H 70 V 110 H 90
          /* Person receiving */
          C 110,110 110,60 120,60 C 130,60 135,70 135,75 V 110 H 115
          
          /* --- Scene 2: Aid/Food Distribution --- */
          /* Person with box */
          C 180,110 180,65 190,65 C 200,65 205,70 205,75 V 110 H 185
          /* Box */
          V 65 H 215 V 55 H 180 V 65
          /* Person serving food */
          C 250,110 250,60 260,60 C 270,60 275,65 275,70 V 110 H 255
          /* Person receiving food, sitting */
          C 300,110 300,80 305,80 C 310,80 315,85 315,85 V 110 H 295

          /* --- Scene 3: The Van --- */
          C 350,110 380,110 400,110
          /* Back of van */
          V 60 H 420
          /* Roof */
          C 420,55 425,50 450,50 H 560
          /* Front of van */
          C 570,50 580,55 580,65 L 590,80 H 610 V 110
          /* Wheels */
          H 595 A 10 10 0 0 1 575 110
          H 465 A 10 10 0 0 1 445 110

          /* --- Scene 4: More Community & Healthcare --- */
          C 650,110 650,60 660,60 C 670,60 675,65 675,70 V 110 H 655
          C 700,110 700,55 710,55 C 720,55 725,65 725,70 V 110 H 705
          C 750,110 750,65 760,65 C 770,65 775,70 775,75 V 110 H 755

          /* --- Scene 5: Children Playing & Education --- */
          /* Child with ball */
          C 820,110 820,75 825,75 C 830,75 835,80 835,80 V 110 H 815
          /* Ball */
          M 850,55 A 10 10 0 1 1 850,54.9 Z
          /* Child jumping */
          C 870,110 870,70 880,70 C 885,70 890,75 890,80 L 880,90 L 870,80 C 870,75 865,70 860,70 C 850,70 850,80 850,80 V 110 H 870
          
          /* Person Graduating */
          C 920,110 920,50 935,50 C 950,50 955,60 955,60
          /* Graduation Cap */
          L 960,65 L 980,55 L 975,65
          L 960,70 C 955,65 950,65 950,70 V 110 H 930
          
          /* --- Scene 6: More People --- */
          C 1000,110 1000,60 1010,60 C 1020,60 1025,65 1025,70 V 110 H 1005
          C 1050,110 1050,65 1060,65 C 1070,65 1075,70 1075,75 V 110 H 1055
          C 1100,110 1100,60 1110,60 C 1120,60 1125,65 1125,70 V 110 H 1105
          C 1150,110 1150,55 1160,55 C 1170,55 1175,65 1175,70 V 110 H 1155
          C 1200,110 1200,65 1210,65 C 1220,65 1225,70 1225,75 V 110 H 1205
          C 1250,110 1250,60 1260,60 C 1270,60 1275,65 1275,70 V 110 H 1255
          C 1300,110 1300,65 1310,65 C 1320,65 1325,70 1325,75 V 110 H 1305
          
          /* End */
          L 1445,110 V 120 H -5 Z"
        />
        {/* Text on the van, overlaid on top of the silhouette path */}
        <text x="505" y="75" fontFamily="Inter, sans-serif" fontSize="10" fill="#f3f4f6" fontWeight="bold" textAnchor="middle">SUKH SEVA FOUNDATION</text>
        <circle cx="455" cy="110" r="8" fill="#f3f4f6" />
        <circle cx="585" cy="110" r="8" fill="#f3f4f6" />
      </g>
    </svg>
  </div>
);

export default FooterSilhouette;
