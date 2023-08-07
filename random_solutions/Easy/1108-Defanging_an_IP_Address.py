class Solution:
    # defangIPaddr  -> Time { O(n), θ(n), Ω(1) } and Space { O(n), θ(n), Ω(n) }

    def defangIPaddr(self, address: str) -> str:
        return address.replace(".", "[.]")
