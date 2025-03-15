import React from 'react';
import '@/app/globals.css'

const Faq = () => {
    const faqs = [
        {
            question: "Wat maakt de aanpak van Vaderhart uniek?",
            answer: 
                "Bij Vaderhart ligt de focus op 2 luiken. Enerzijds richten we ons op het versterken van de vaderrol en het gezin. Anderzijds is er ook het luik 'MENtal health' dat mannen wil ondersteunen in hun persoonlijke groei. Hoewel het soms nog een taboe lijkt, zijn mannen gemiddeld genomen minder snel geneigd om over hun moeilijkheden te praten. Immers, door de maatschappij, cultuur en opvoeding kregen velen de boodschap dat dit een teken van zwakte zou zijn. Echter, het tegendeel is waar. Je kwetsbaar opstellen vanuit een emotioneel volwassen houding vergt moed en is een manier om beter te begrijpen wie je vandaag bent. Door onze triggers, patronen en werkpunten naar ons bewustzijn te brengen kunnen we er iets aan doen.\n\nIk help je om meer zelfinzicht te krijgen, praktische tools te ontwikkelen en een betere verbinding te creëren met jezelf en je omgeving. Het is een unieke kans om te groeien en te leren in een veilige en ondersteunende omgeving.\n\nMet vaders wil ik graag meekijken, advies geven en steun bieden. Hierbij vertrek ik vanuit het idee dat het allerbelangrijkste waar je als ouder kan investeren, de veilige hechting met je kind is. Hoe kan je een sterke band creeëren? Hoe zorg je er voor dat je het potentieel van ouder-kind relatie optimaal benut? Dat zijn allemaal de vragen die centraal staan. Zonder schuld of schaamte kijken we naar wat werkt en hoe je dit in praktijk kan brengen."
        },
        {
            question: "Waarom zou ik als vader of man professionele hulp zoeken?",
            answer:
                "Het zoeken van professionele hulp is een teken van kracht, niet van zwakte. Als vader of man kun je te maken krijgen met uitdagingen zoals stress, onzekerheid over opvoeding, of het vinden van balans. We leven immers in een gehaaste maatschappij waarbij iedereen op zoek is naar een quick fix van zijn problemen. Helaas, vraagt verbindend opvoeden en werken aan zichzelf tijd en geduld. Hierbij wil ik jou adviezen geven, mee nadenken en short-cuts geven waar mogelijk. Meer zelfinzicht, praktische tools en een betere verbinding met jezelf en je omgeving staan centraal. Het is een investering in je persoonlijke groei en welzijn die zich op de lange termijn terugbetaalt."
        },
        {
            question: "Hoe weet ik of coaching iets voor mij is?",
            answer:
                "Coaching kan nuttig zijn als je merkt dat je vastloopt in bepaalde aspecten van je leven, of als je met opvoedingsvraagstukken zit. Tijdens een kennismakingsgesprek kunnen we samen verkennen wat jouw behoeften en doelen zijn. Dit gesprek is geheel vrijblijvend en geeft je een goed beeld van wat coaching voor jou kan betekenen."
        },
        {
            question: "Wat kan ik verwachten van een groepsbijeenkomst?",
            answer:
                "In een groepsbijeenkomst kom je samen met andere mannen die soortgelijke ervaringen en uitdagingen hebben. Het is een veilige ruimte om ervaringen te delen, te leren van elkaar en nieuwe inzichten op te doen. Hier treed ik eerder op als facilitator en niet als lesgever. De bijeenkomsten zijn interactief en gericht op thema's zoals vaderschap en mentaal welzijn. Je gaat naar huis met praktische tips en een gevoel van verbondenheid."
        },
        {
            question: "Hoe lang duurt een coachingstraject?",
            answer:
                "De duur van een coachingstraject hangt af van jouw specifieke behoeften en doelen. Sommige mensen hebben baat bij een paar sessies, terwijl anderen een langer traject volgen. Tijdens de intake bespreken we wat voor jou het meest geschikt is en stellen we een flexibel plan op dat bij jou past."
        },
        {
            question: "Welke diensten biedt Vaderhart aan?",
            answer:
                "Vaderhart biedt coachingdiensten voor mannen en vaders, met persoonlijke begeleiding om een betere verbinding met zichzelf en hun gezin te bevorderen."
        },
        {
            question: "Hoe kan Vaderhart mij helpen om een betere vader te worden?",
            answer:
                "Onze coaching helpt u om uw waarden en levensdoelen beter te begrijpen, zodat u gezinsbanden kunt versterken en een persoonlijk evenwicht kunt vinden dat bij u past."
        },
        {
            question: "Waarom kiezen voor Vaderhart voor levenscoaching?",
            answer:
                "Bij Vaderhart zetten we ons in om hoogwaardige coaching te bieden, gericht op de persoonlijke ontwikkeling van mannen, met tools en middelen die zijn afgestemd op individuele behoeften."
        },
        {
            question: "Wat zijn de kosten van de diensten van Vaderhart?",
            answer:
                "De tarieven voor de coachingsdiensten van Vaderhart variëren afhankelijk van de specifieke behoeften en de duur van de sessies. Neem contact met ons op voor een persoonlijke offerte."
        },
        {
            question: "Is Vaderhart gecertificeerd en betrouwbaar?",
            answer:
                "Vaderhart bestaat uit ervaren en gecertificeerde coaches, die zich inzetten om mannen te begeleiden bij hun persoonlijke en familiale ontwikkeling, met professionaliteit en vertrouwelijkheid."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-[#e0dbd4] to-[#ffffff] text-[#333] rounded-lg shadow-lg my-10 md:my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#333]">
                Antwoorden op uw vragen
            </h2>
            <div className="space-y-4 divide-y divide-gray-200">
                {faqs.map((faq, index) => (
                    <details
                        key={index}
                        className="group p-4 bg-white rounded-lg shadow-sm transition-transform duration-300 hover:scale-105"
                    >
                        <summary className="text-lg md:text-xl font-medium text-[#0065de] cursor-pointer flex justify-between items-center">
                            {faq.question}
                            <span className="text-[#555] group-open:rotate-180 transition-transform duration-300">▼</span>
                        </summary>
                        <div className="mt-3 overflow-hidden transition-max-height duration-500 ease-in-out group-open:max-h-96">
                            <p className="pt-2 text-[#555] leading-relaxed whitespace-pre-line">{faq.answer}</p>
                        </div>
                    </details>
                ))}
            </div>
        </div>
    );
};

export default Faq;