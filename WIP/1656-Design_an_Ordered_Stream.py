class OrderedStream:
    def __init__(self, n: int):
        self.values = [None] * n

    def insert(self, idKey: int, value: str) -> list[str]:
        response = [value for value in self.values if value != None]
        self.values.insert(idKey, value)

        return response


# class OrderedStream {
#   // Define a construction function and set some values as object properties to keep our data persistent between invocations
#   constructor(n) {
#     this.pointer = 0
#     // this will create an array of length (n) and set all values to 'undefined'
#     this.list = []
#   }

#   insert(id, value) {
#     // will be used to store values that pass the condition and to be returned
#     let chunk = []
#     // since array indices start from zero and id in this problem from 1 we need to decrement it
#     this.list[id - 1] = value
#     // every time we insert a value we have to look if there is a value at the index (pointer) that should be returned
#     // if there is any we copy it and then iterate to the next element until the condition is no longer true
#     while(this.list[this.pointer]) {
#       chunk.push(this.list[this.pointer])
#       this.pointer++
#     }
#     return chunk
#   }
# }
