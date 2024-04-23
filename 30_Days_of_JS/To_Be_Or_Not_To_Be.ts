type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

// Algorithm Analysis
//      Time Complexity:     Ο(1) Ω(1) Θ(1)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (_val: any) => {
      if (val !== _val) throw new Error("Not Equal");

      return true;
    },
    notToBe: (_val: any) => {
      if (val === _val) throw new Error("Equal");

      return true;
    },
  };
}
