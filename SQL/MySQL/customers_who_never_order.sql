SELECT c.name Customers FROM customers c 
    LEFT JOIN Orders o ON o.customerId = c.id 
    WHERE o.customerId IS null 