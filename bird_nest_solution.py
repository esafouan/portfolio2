def solution(forest, bird):
    # Initialize variables
    direction = True  # True for right, False for left
    total_sticks = 0  # Total length of sticks collected
    output = []  # Indices of found sticks
    
    # Continue until we've collected at least 100 length of sticks
    while total_sticks < 100:
        # If moving right
        if direction:
            # Look for sticks to the right
            i = bird + 1  # Start looking from the position right after bird
            while i < len(forest) and forest[i] == 0:
                i += 1
            
            # If we found a stick
            if i < len(forest):
                output.append(i)
                total_sticks += forest[i]
                # Mark the position as empty after taking the stick
                forest = forest.copy()  # Create a copy to avoid modifying the original
                forest[i] = 0
            else:
                # If we reached the end without finding a stick, break
                break
        # If moving left
        else:
            # Look for sticks to the left
            i = bird - 1  # Start looking from the position left before bird
            while i >= 0 and forest[i] == 0:
                i -= 1
            
            # If we found a stick
            if i >= 0:
                output.append(i)
                total_sticks += forest[i]
                # Mark the position as empty after taking the stick
                forest = forest.copy()  # Create a copy to avoid modifying the original
                forest[i] = 0
            else:
                # If we reached the beginning without finding a stick, break
                break
        
        # Change direction for next iteration
        direction = not direction
    
    return output

# Example test
if __name__ == "__main__":
    forest = [25, 0, 50, 0, 0, 0, 0, 15, 0, 0, 45]
    bird = 4
    result = solution(forest, bird)
    print(f"Result: {result}")
    print(f"Expected: [7, 2, 10]")
    
    # Verify the total stick length
    total_length = 0
    original_forest = [25, 0, 50, 0, 0, 0, 0, 15, 0, 0, 45]
    for i in result:
        total_length += original_forest[i]
    print(f"Total stick length: {total_length}")
    
    # Check if the result matches the expected output
    expected = [7, 2, 10]
    if result == expected:
        print("Test passed!")
    else:
        print("Test failed!")
