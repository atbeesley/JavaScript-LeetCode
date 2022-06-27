class Solution {
    public String reverseWords(String s) {
        StringBuilder res = new StringBuilder();
        String[] arr = s.split(" ");
        for(String word: arr){
            StringBuilder reversed = new StringBuilder();
            reversed.append(word);
            reversed.reverse();
            res.append(reversed + " ");
        }
        res.deleteCharAt(res.length()-1);  
        return res.toString();
    }
}