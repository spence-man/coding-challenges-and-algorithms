require "../PaginationHelper"

RSpec.describe PaginationHelper do
  let(:pagination_helper) {PaginationHelper.new(['a','b','c','d','e','f'],4)}
  describe '#item_count' do
    it 'returns the number of items within the entire collection' do
      expect(pagination_helper.item_count).to eq(6)
    end
  end

  describe '#page_count' do
    it 'returns the number of pages' do
      expect(pagination_helper.page_count).to eq(2)
    end
  end

  describe '#page_item_count' do
    it 'returns the number of items on the current page' do
      expect(pagination_helper.page_item_count(0)).to eq(4)
    end

    it 'return -1 for page_index values that are out of range' do
      expect(pagination_helper.page_item_count(2)).to eq(-1)
    end
  end


  describe '#page_index' do
    it 'determines what page an item is on' do
      expect(pagination_helper.page_index(5)).to eq(1)
      expect(pagination_helper.page_index(2)).to eq(0)
    end

    it 'return -1 for item_index values that are out of range' do
      expect(pagination_helper.page_index(20)).to eq(-1)
      expect(pagination_helper.page_index(-10)).to eq(-1)
    end
  end
end
