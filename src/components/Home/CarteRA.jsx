import React, { useState } from "react";

const pointsRaid = [
  {
    id: 1,
    type: 'image',
    nom: "Raid 2013",
    lieu: "Monts du Lyonnais",
    top: "40%",  
    left: "33%", 
    mediaUrl: "/assets/home/carte/2013.png",
    description: "Lyon et les Monts du Lyonnais.",
  },
  {
    id: 2,
    type: 'image',
    nom: "Raid 2014",
    lieu: "Beaujolais",
    top: "32%",  
    left: "25%", 
    mediaUrl: "/assets/home/carte/2014.jpg",
    description: "Les collines du Beaujolais.",
  },
  {
    id: 3,
    type: 'image',
    nom: "Raid 2015",
    lieu: "Bauges",
    top: "35%",  
    left: "67%", 
    mediaUrl: "/assets/home/carte/2015.jpg",
    description: "Le massif des Bauges : de la Féclaz jusqu'à Annecy !",
  },
  {
    id: 4,
    type: 'video',
    nom: "Raid 2016",
    lieu: "Trièves",
    top: "74%",  
    left: "58%", 
    mediaUrl: "/assets/home/carte/2016.mp4",
    description: "L'aventure en Trièves.",
  },
  {
    id: 5,
    type: 'image',
    nom: "Raid 2017",
    lieu: "Bauges",
    top: "36%",  
    left: "70%", 
    mediaUrl: "/assets/home/carte/2017.jpg",
    description: "Les Bauges : Semnoz, puis col de la Forclaz.",
  },
  {
    id: 6,
    type: 'image',
    nom: "Raid 2018",
    lieu: "Haut Jura",
    top: "15%",  
    left: "57%", 
    mediaUrl: "/assets/home/carte/2018.jpg",
    description: "Le Haut Jura.",
  },
  {
    id: 7,
    type: 'video',
    nom: "Raid 2019",
    lieu: "Vercors Sud",
    top: "71%",  
    left: "56%", 
    mediaUrl: "/assets/home/carte/2019.mp4",
    description: "Vercors Sud : passerelles du Monteynard !",
  },
  {
    id: 8,
    type: 'image',
    nom: "Raid 2020",
    lieu: "Monts du Lyonnais",
    top: "45%",  
    left: "26%", 
    mediaUrl: "/assets/home/carte/2020.png",
    description: "Le RAID Centrale Lyon réussit à composer avec le Covid 19 pour organiser une édition légendaire.",
  },
  {
    id: 9,
    type: 'video',
    nom: "Raid 2021",
    lieu: "Monts du Lyonnais",
    top: "37%",  
    left: "31%", 
    mediaUrl: "/assets/home/carte/2021.mp4",
    description: "Une arrivée mythique sur le campus de Centrale pour les 10 ans de l'association !",
  },
  {
    id: 10,
    type: 'image',
    nom: "Raid 2022",
    lieu: "Massif du Pilat",
    top: "57%",  
    left: "26%", 
    mediaUrl: "/assets/home/carte/2022.JPEG",
    description: "Massif du Pilat.",
  },
  {
    id: 11,
    type: 'image',
    nom: "Raid 2023",
    lieu: "Taillefer",
    top: "68%",  
    left: "60%", 
    mediaUrl: "/assets/home/carte/2023.jpg",
    description: "Un incroyable passage dans les pentes du KV le plus raide du monde : la Verticale du Grand Serre.",
  },
  {
    id: 12,
    type: 'image',
    nom: "Raid 2024",
    lieu: "Massif du Pilat",
    top: "63%",  
    left: "25%", 
    mediaUrl: "/assets/home/carte/2024.jpg",
    description: "Retour dans le Massif du Pilat.",
  },
  {
    id: 13,
    type: 'image',
    nom: "Raid 2025",
    lieu: "Bauges",
    top: "43.5%",  
    left: "67%", 
    mediaUrl: "/assets/home/carte/2025.jpg",
    description: "Un parcours en itinérance entre Aix-les-Bains et Saint-Pierre d'Albigny",
  }
];

export default function CarteRA() {
  const [pointActif, setPointActif] = useState(null);

  return (
    <div style={{ height: "100vh", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      
      <h2 style={{ marginTop:"10px", marginBottom: "30px", fontSize: "2rem" }}>Les Éditions Précédentes du RAID Centrale Lyon</h2>

      <div style={{ 
          position: "relative", 
          width: "90%", 
          maxWidth: "800px", 
          borderRadius: "15px", 
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          overflow: "hidden" 
      }}>
        
        <img 
          src="/assets/home/carte/carte.png" 
          alt="Carte des Raids" 
          style={{ width: "100%", display: "block" }}
        />

        {pointsRaid.map((point) => (
          <div
            key={point.id}
            onClick={() => setPointActif(point)}
            style={{
              position: "absolute",
              top: point.top,
              left: point.left,
              width: "24px",
              height: "24px",
              backgroundColor: "#ff4d4d", 
              borderRadius: "50%",
              transform: "translate(-50%, -50%)", 
              cursor: "pointer",
              border: "3px solid white",
              boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
              transition: "transform 0.2s" 
            }}
            title={point.nom}
            onMouseEnter={(e) => e.target.style.transform = "translate(-50%, -50%) scale(1.3)"}
            onMouseLeave={(e) => e.target.style.transform = "translate(-50%, -50%) scale(1)"}
          />
        ))}

        {pointActif && (
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
            width: "85%",
            maxWidth: "400px",
            textAlign: "center",
            zIndex: 10
          }}>
            <button 
              onClick={() => setPointActif(null)}
              style={{ 
                position: "absolute", top: "10px", right: "15px", 
                background: "none", border: "none", fontSize: "20px", 
                cursor: "pointer", color: "#666" 
              }}
            >
              ✖
            </button>
            <h3 style={{ margin: "10px 0", color: "#333" }}>{pointActif.nom}</h3>
            <p style={{ margin: "0 0 15px 0", color: "#777", fontSize: "0.9rem" }}>{pointActif.lieu}</p>
            
            {pointActif.type === 'image' && (
              <img 
                src={pointActif.mediaUrl} 
                alt={pointActif.nom} 
                style={{ width: "100%", borderRadius: "8px", marginBottom: "15px", objectFit: "cover", maxHeight: "250px" }} 
              />
            )}
            {pointActif.type === 'video' && (
              <video 
                src={pointActif.mediaUrl} 
                controls 
                autoPlay 
                muted={true} 
                style={{ width: "100%", borderRadius: "8px", marginBottom: "15px", maxHeight: "250px" }} 
              />
            )}
            
            <p style={{ margin: 0, color: "#555", lineHeight: "1.5" }}>{pointActif.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}