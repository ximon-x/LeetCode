class ParkingSystem:
    def __init__(self, big: int, medium: int, small: int):
        self.max_big = big
        self.max_medium = medium
        self.max_small = small
        self.parked_big = 0
        self.parked_medium = 0
        self.parked_small = 0
        
    
    def addCar(self, carType: int) -> bool:
        if carType == 1:
            if self.parked_big == self.max_big:
                return False
            else:
                self.parked_big += 1
                return True
        
        elif carType == 2:
            if self.parked_medium == self.max_medium:
                return False
            else:
                self.parked_medium += 1
                return True
            
        else:
            if self.parked_small == self.max_small:
                return False
            else:
                self.parked_small += 1
                return True