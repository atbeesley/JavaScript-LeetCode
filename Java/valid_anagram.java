class Solution {
    public boolean isAnagram(String s, String t) {
        
        char[] splitS = s.toCharArray();
        char[] splitT = t.toCharArray();
        
        Arrays.sort(splitS);
        Arrays.sort(splitT);
        
        return Arrays.equals(splitS, splitT);        
        
    }
}