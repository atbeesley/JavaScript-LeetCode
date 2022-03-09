class Solution {
    public boolean isPalindrome(String s) {
                
        String lower = s.toLowerCase();        
        
        String filtered = lower.replaceAll("[^a-zA-Z0-9]", "");
        
        StringBuilder reversed = new StringBuilder(filtered).reverse();
        
        String s2 = reversed.toString();
        
        StringBuilder reReversed = new StringBuilder(reversed).reverse();
        
        String s3 = reReversed.toString();

        return s2.equals(s3);

    }
}