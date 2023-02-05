class Solution {
    public int lengthOfLastWord(String s) {
        String[] words = new String[s.length()];
        words = s.trim().split(" ");
        String lastWord = words[words.length-1];
        return lastWord.length();
    }
