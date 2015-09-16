describe("prompts", function() {

  it("should let us get all prompt ids", function() {
    // Given
    Prompts.remove({});
    var id = Prompts.create({text: 'What is your favorite color?'});

    // When
    var promptIds = Prompts.allPromptIds();

    // Then
    expect(promptIds.length).toBe(1);
    expect(promptIds).toContain(id);
  });

  it("should not store empty prompts", function() {
      // Given
      Prompts.remove({});
      var id = Prompts.create('');

      // When
      var promptIds = Prompts.allPromptIds();

      // Then
      expect(promptIds).not.toContain(id);
  });

  it("should return all prompts' content", function() {
      Prompts.remove({});
      Prompts.create('hello');
      Prompts.create('world');

      var prompts = Prompts.getPromptContent();
      expect(prompts).toEqual(['hello', 'world']);
  });

  it("should return all prompts in creation order", function() {
    Prompts.remove({});
    var id1 = Prompts.create('Your favorite book?');
    var id2 = Prompts.create('What is your favorite color?');

    var prompts = Prompts.inOrder();

    expect(prompts[0].text).toEqual('Your favorite book?');
  });
});
