export const DDIS_TYPE_EXAMPLE = {
  None: {
    sentence:
      "Ibuprofen is a nonsteroidal anti-inflammatory drug and acetaminophen is used for pain relief.",
    drugPairs: { drug1: "Ibuprofen", drug2: "Acetaminophen" },
    xml: `<sentence id="DDI-DrugBank.d654.s1">
 Ibuprofen is a nonsteroidal anti-inflammatory 
  drug and acetaminophen is used for pain relief.
  <entity id="e1" type="drug" text="Ibuprofen"/>
  <entity id="e2" type="drug" text="acetaminophen"/>
  <pair id="p1" e1="e1" e2="e2" 
    ddi="false" type="null"/>
</sentence>`,
    bg: "bg-gray-200",
  },
  Effect: {
    sentence:
      "Concomitant use of aspirin with warfarin may increase the risk of bleeding.",
    drugPairs: { drug1: "aspirin", drug2: "warfarin" },
    xml: `<sentence id="DDI-DrugBank.d456.s2">
  Concomitant use of aspirin with warfarin 
  may increase the risk of bleeding.
  <entity id="e1" type="drug" text="aspirin"/>
  <entity id="e2" type="drug" text="warfarin"/>
  <pair id="p1" e1="e1" e2="e2" 
    ddi="true" type="effect"/>
</sentence>`,
    bg: "bg-green-100",
  },
  Mechanism: {
    sentence:
      "Rifampin appears to enhance the metabolism of methadone via induction of hepatic microsomal enzymes.",
    drugPairs: { drug1: "Rifampin", drug2: "Methadone" },
    xml: `<sentence id="DDI-DrugBank.d123.s5">
  Rifampin appears to enhance the metabolism 
  of methadone via induction of hepatic 
  microsomal enzymes.
  <entity id="e1" type="drug" text="Rifampin"/>
  <entity id="e2" type="drug" text="methadone"/>
  <pair id="p1" e1="e1" e2="e2" 
    ddi="true" type="mechanism"/>
</sentence>`,
    bg: "bg-blue-100",
  },
  Int: {
    sentence: "There is an interaction between digoxin and amiodarone",
    drugPairs: { drug1: "digoxin", drug2: "amiodarone" },
    xml: `<sentence id="DDI-DrugBank.d321.s7">
  There is an interaction between digoxin 
  and amiodarone.
  <entity id="e1" type="drug" text="digoxin"/>
  <entity id="e2" type="drug" text="amiodarone"/>
  <pair id="p1" e1="e1" e2="e2" 
    ddi="true" type="int"/>
</sentence>`,
    bg: "bg-pink-100",
  },
  Advice: {
    sentence:
      " Ciprofloxacin should not be taken concurrently with antacids containing magnesium hydroxide or aluminum hydroxide.",
    drugPairs: { drug1: "Ciprofloxacin", drug2: "Antacids" },
    xml: `<sentence id="DDI-DrugBank.d789.s3">
  Ciprofloxacin should not be taken concurrently 
  with antacids containing magnesium hydroxide 
  or aluminum hydroxide.
  <entity id="e1" type="drug" text="Ciprofloxacin"/>
  <entity id="e2" type="group" text="antacids"/>
  <pair id="p1" e1="e1" e2="e2" 
    ddi="true" type="advice"/>
</sentence>`,
    bg: "bg-yellow-100",
  },
};
