#include "./Linked_List_Node.cpp"

class Solution {
   public:
    ListNode* getIntersectionNode(ListNode* headA, ListNode* headB) {
        ListNode* p = headA;
        while (p != nullptr) {
            ListNode* q = headB;

            while (q != nullptr) {
                if (p == q)
                    return p;

                q = q->next;
            }
            p = p->next;
        }

        return nullptr;
    }
};

int main() {
    ListNode firstA = ListNode{4};
    ListNode secondA = ListNode{1};

    ListNode firstB = ListNode{5};
    ListNode secondB = ListNode{6};
    ListNode thirdB = ListNode{1};

    ListNode firstCommon = ListNode{8};
    ListNode secondCommon = ListNode{4};
    ListNode thirdCommon = ListNode{5};

    firstA.next = &secondA;
    secondA.next = &firstCommon;

    firstB.next = &secondB;
    secondB.next = &thirdB;
    thirdB.next = &firstCommon;

    firstCommon.next = &secondCommon;
    secondCommon.next = &thirdCommon;

    Solution solution{};

    ListNode* intersectionNode = solution.getIntersectionNode(&firstA, &firstB);
    cout << "The intersection happened at Node " << intersectionNode
         << " with value: " << intersectionNode->val << "\n";
}
