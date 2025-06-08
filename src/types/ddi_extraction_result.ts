export interface DDI_Extraction_result_I{
    drug1: string,
        drug2: string,
        label: DDI_TYPE
}


export type DDI_TYPE = "none" | "effect"|  "mechanism" | "advise" | "int"