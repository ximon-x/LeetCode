class Solution:
    # decode  -> Time { O(n), θ(n), Ω(1) } and Space { O(n), θ(n), Ω(n) }

    def decode(self, encoded: list[int], first: int) -> list[int]:
        result = [first]

        for i in range(len(encoded)):
            curr_decoded = result[i] ^ encoded[i]
            result.append(curr_decoded)

        return result
