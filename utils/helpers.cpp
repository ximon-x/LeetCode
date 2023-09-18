#include <iostream>

using namespace std;

struct Helpers {
    template <typename T>
    static void printContainer(T const& range) {
        cout << " [ ";
        for (auto const& item : range) {
            cout << item << ", ";
        }
        cout << "] \n";
    }
};
