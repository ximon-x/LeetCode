class Solution:
    # maximum69Number  -> Time { O(n), θ(n), Ω(1) } and Space { O(n), θ(n), Ω(n) }
    
    def maximum69Number(self, num: int) -> int:
        str_num = str(num)
        result = ""

        switched = False

        for i in str_num:
            if not switched and i == "6":
                result += "9"
                switched = True

            else: 
                result += i

        return int(result)


