class OrderedStream:
    # insert    -> Time { O(1), θ(1), Ω(1) } and Space { O(1), θ(1), Ω(1) }

    def __init__(self, n: int):
        self.pointer = 0
        self.values = [None] * n

    def insert(self, idKey: int, value) -> list[str]:
        response = []
        self.values[idKey - 1] = value

        if self.values[self.pointer] is None:
            return []

        else:
            while (
                self.pointer < len(self.values)
                and self.values[self.pointer] is not None
            ):
                response.append(self.values[self.pointer])
                self.pointer += 1

            return response
