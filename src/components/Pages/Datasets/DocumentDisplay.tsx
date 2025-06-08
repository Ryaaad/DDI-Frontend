function DocumentDisplay() {
  return (
    <div className="rounded-md bg-gray-100 py-2 px-4">
      <pre className="text-xs text-gray-800 font-mono leading-relaxed">
        {`<document id="DDI-DrugBank.d123">
  <sentence id="DDI-DrugBank.d123.s0">
    <entity id="e1" type="drug" text="aspirin"/>
    <entity id="e2" type="drug" text="warfarin"/>
    <pair id="p1" e1="e1" e2="e2" ddi="true" type="effect"/>
  </sentence>
</document>`}
      </pre>
    </div>
  );
}

export default DocumentDisplay;
